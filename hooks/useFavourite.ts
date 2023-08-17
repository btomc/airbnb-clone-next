import { User } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { toast } from 'react-hot-toast'
import useLoginModal from './useLoginModal'

interface IUseFavourite {
  listingId: string
  currentUser?: User | null
}

const useFavourite = ({ listingId, currentUser }: IUseFavourite) => {
  const router = useRouter()
  const loginModal = useLoginModal()

  const hasFavourited = useMemo(() => {
    const list = currentUser?.favouriteIds || []

    return list.includes(listingId)
  }, [currentUser, listingId])

  const toggleFavourite = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    if (!currentUser) {
      return loginModal.onOpen()
    }

    try {
      let request

      if (hasFavourited) {
        request = () => axios.delete(`/api/favourites/${listingId}`)
      } else {
        request = () => axios.post(`/api/favourites/${listingId}`)
      }

      await request()
      router.refresh()
      toast.success('Success')
    } catch (error) {
      toast.error('Something went wrong')
    }
  }
  return {
    hasFavourited,
    toggleFavourite,
  }
}

export default useFavourite
