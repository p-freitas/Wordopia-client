import React, { useEffect, useState } from 'react'
import {
  createClient,
  createMicrophoneAudioTrack,
} from 'agora-rtc-react'
import { useLocation } from 'react-router-dom'

const config = {
  mode: 'rtc',
  codec: 'vp8',
}

const appId = 'fabe835650884d50a65dc5645a0d68bd' //ENTER APP ID HERE
const token = null

const App = () => {
  const [inCall, setInCall] = useState(false)
  const [channelName, setChannelName] = useState('')
  return (
    <div>
      {inCall ? (
        <VideoCall setInCall={setInCall} channelName={channelName} />
      ) : (
        <ChannelForm setInCall={setInCall} setChannelName={setChannelName} />
      )}
    </div>
  )
}

const useClient = createClient(config)
const useMicrophoneAudioTrack = createMicrophoneAudioTrack({
  echoCancellation: true, // Enable echo cancellation
})

const VideoCall = props => {
  const { setInCall, channelName } = props
  const client = useClient()
  const { ready, track: audioTrack } = useMicrophoneAudioTrack()

  useEffect(() => {
    let init = async name => {
      client.on('user-published', async (user, mediaType) => {
        await client.subscribe(user, mediaType)
        console.log('subscribe success')
        if (mediaType === 'audio') {
          user.audioTrack?.play()
        }
      })

      client.on('user-unpublished', (user, type) => {
        console.log('unpublished', user, type)
        if (type === 'audio') {
          user.audioTrack?.stop()
        }
      })

      client.on('user-left', user => {
        console.log('leaving', user)
      })

      await client.join(appId, name, token, null)
      if (audioTrack) await client.publish([audioTrack])
    }

    if (ready && audioTrack) {
      console.log('init ready')
      init(channelName)
    }
  }, [channelName, client, ready, audioTrack])

  console.log('ready::', ready)
  console.log('audioTrack::', audioTrack)

  return (
    <div className='App'>
      {ready && audioTrack && (
        <Controls
          audioTrack={audioTrack}
          setInCall={setInCall}
        />
      )}
    </div>
  )
}

export const Controls = props => {
  const client = useClient()
  const { audioTrack, setInCall } = props
  //   const [muteAudio, setMuteAudio] = useState(false)
  const [muteAudio, setMuteAudio] = useState(false)

  console.log('audioTrack::', audioTrack)

  const toggleAudio = async () => {
    const newMuteAudio = !muteAudio
    await audioTrack.setEnabled(!newMuteAudio)
    setMuteAudio(newMuteAudio)
  }


  const leaveChannel = async () => {
    await client.leave()
    client.removeAllListeners()
    audioTrack.close()
    setInCall(false)
  }

  return (
    <div className='controls'>
      <p className={muteAudio ? 'on' : ''} onClick={() => toggleAudio()}>
        {muteAudio ? 'Unmute Audio' : 'Mute Audio'}
      </p>
      <p onClick={leaveChannel}>Leave</p>
    </div>
  )
}

const ChannelForm = props => {
  const location = useLocation()
  const { setInCall, setChannelName } = props

  return (
    <form className='join'>
      <button
        onClick={e => {
          setChannelName(location.pathname.split('/')[2])
          e.preventDefault()
          setInCall(true)
        }}
      >
        Join
      </button>
    </form>
  )
}

export default App
