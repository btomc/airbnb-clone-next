'use client'

import EmptyState from '@/components/shared/EmptyState'
import { useEffect } from 'react'

interface ErrorStateProps {
  error: Error
}

import React from 'react'

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return <EmptyState title='Oops' subtitle='Something went wrong!' />
}

export default ErrorState
