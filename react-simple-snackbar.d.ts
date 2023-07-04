declare module 'react-simple-snackbar' {
  export function SnackbarProvider(props: any): JSX.Element
  export function useSnackbar(options?: any): [() => void]
}
