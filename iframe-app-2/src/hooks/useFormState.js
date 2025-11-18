import { useState, useEffect } from 'react'

export function useFormState(formData, initialData) {
  const [hasChanges, setHasChanges] = useState(false)
  const [isDirty, setIsDirty] = useState(false)

  // Track if form has been modified
  useEffect(() => {
    const hasModifications = Object.keys(formData).some(key => {
      const currentValue = formData[key]
      const initialValue = initialData[key]
      return currentValue !== initialValue
    })
    setIsDirty(hasModifications)
    setHasChanges(hasModifications)
  }, [formData, initialData])

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

  return { hasChanges, isDirty, setHasChanges, setIsDirty }
}

