import React, { useEffect, useState } from 'react'
import { createClient, createMicrophoneAudioTrack } from 'agora-rtc-react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Tooltip } from 'react-tooltip'
import { useSnackbar } from 'react-simple-snackbar'
import * as S from './styles'

const config = {
  mode: 'rtc',
  codec: 'vp8',
}

const appId = 'fabe835650884d50a65dc5645a0d68bd' //ENTER APP ID HERE
const token = null

const VoiceChat = () => {
  const [inCall, setInCall] = useState(false)
  const [channelName, setChannelName] = useState('')
  return (
    <S.VoiceChatContainer>
      {inCall ? (
        <VideoCall setInCall={setInCall} channelName={channelName} />
      ) : (
        <ChannelForm setInCall={setInCall} setChannelName={setChannelName} />
      )}
    </S.VoiceChatContainer>
  )
}

const useClient = createClient(config)
const useMicrophoneAudioTrack = createMicrophoneAudioTrack({
  echoCancellation: true, // Enable echo cancellation
})

const options = {
  position: 'top-center',
  style: {
    backgroundColor: 'rgb(72 90 255)',
    color: 'white',
    fontFamily: 'MyFont',
    fontSize: '20px',
    textAlign: 'center',
  },
}

const VideoCall = props => {
  const { t } = useTranslation()
  const { setInCall, channelName } = props
  const client = useClient()
  const { ready, track: audioTrack, error } = useMicrophoneAudioTrack()
  const [openSnackbar] = useSnackbar(options)

  useEffect(() => {
    let init = async name => {
      client.on('user-published', async (user, mediaType) => {
        await client.subscribe(user, mediaType)
        if (mediaType === 'audio') {
          user.audioTrack?.play()
        }
      })

      client.on('user-unpublished', (user, type) => {
        if (type === 'audio') {
          user.audioTrack?.stop()
        }
      })

      await client.join(appId, name, token, null)
      if (audioTrack) await client.publish([audioTrack])
    }

    if (ready && audioTrack) {
      init(channelName)
    }

    if (error) {
      error?.code === 'DEVICE_NOT_FOUND' &&
        openSnackbar(`${t('Microfone não encontrado')}`, 5000)

      error?.code === 'PERMISSION_DENIED' &&
        openSnackbar(`${t('Habilite o acesso ao microfone')}`, 5000)

      setInCall(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelName, client, ready, audioTrack, error])

  return (
    <div className='App'>
      {ready && audioTrack && (
        <Controls audioTrack={audioTrack} setInCall={setInCall} />
      )}
    </div>
  )
}

export const Controls = props => {
  const client = useClient()
  const { t } = useTranslation()

  const { audioTrack, setInCall } = props
  const [muteAudio, setMuteAudio] = useState(false)

  console.log('audioTrack::', audioTrack);

  const toggleAudio = async () => {
    const newMuteAudio = !muteAudio
    await audioTrack.setMuted(!newMuteAudio)
    setMuteAudio(newMuteAudio)
  }

  const leaveChannel = async () => {
    await client.leave()
    client.removeAllListeners()
    audioTrack.close()
    setInCall(false)
  }
  const MuteIcon = <S.Icon className='fas fa-microphone'></S.Icon>
  const UnmuteIcon = <S.Icon className='fas fa-microphone-slash'></S.Icon>
  const LeaveIcon = (
    <S.Icon className='fas fa-sign-out-alt fa-rotate-180'></S.Icon>
  )

  return (
    <S.ControlsContainer>
      {/* <p className={muteAudio ? 'on' : ''} onClick={() => toggleAudio()}>
        {muteAudio ? 'Unmute Audio' : 'Mute Audio'}
      </p> */}
      <S.MuteButton
        onClick={() => toggleAudio()}
        isMuted={muteAudio}
        aria-label='Mute audio'
        aria-pressed='false'
        type='button'
        data-tooltip-id='mute-button-tooltip'
        data-tooltip-content={
          muteAudio ? t('Ativar microfone') : t('Desativar microfone')
        }
        data-tooltip-place='bottom'
      >
        {!muteAudio ? MuteIcon : UnmuteIcon}
      </S.MuteButton>
      <S.LeaveButton
        onClick={leaveChannel}
        aria-label='Leave voice chat'
        aria-pressed='false'
        type='button'
        data-tooltip-id='leave-button-tooltip'
        data-tooltip-content={t('Sair do chat')}
        data-tooltip-place='bottom'
      >
        {LeaveIcon}
      </S.LeaveButton>
      <Tooltip id='mute-button-tooltip' />
      <Tooltip id='leave-button-tooltip' />
    </S.ControlsContainer>
  )
}

const ChannelForm = props => {
  const location = useLocation()
  const { setInCall, setChannelName } = props
  const { t } = useTranslation()

  return (
    <form className='join'>
      <S.VoiceChatButton
        onClick={e => {
          setChannelName(location.pathname.split('/')[2])
          e.preventDefault()
          setInCall(true)
        }}
      >
        {t('Chat de voz')}
      </S.VoiceChatButton>
    </form>
  )
}

export default VoiceChat
