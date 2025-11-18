import { useState, useEffect } from 'react'

export default function useUnsavedChanges() {
  const [hasChanges, setHasChanges] = useState(false)

  // Set up beforeunload handler to trigger "Leave Site" prompt
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (hasChanges) {
        e.preventDefault()
        e.returnValue = 'You have unsaved changes. Are you sure you want to leave?'
        return e.returnValue
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [hasChanges])

  return { hasChanges, setHasChanges }
}

