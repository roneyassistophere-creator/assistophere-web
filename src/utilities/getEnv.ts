export const getEnv = (key: string): string | undefined => {
  // Prevent client-side access and bundler inlining
  if (typeof window === 'undefined') {
    return process.env[key]
  }
  return undefined
}

export const getServerSecret = getEnv
