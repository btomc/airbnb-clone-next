'use client'

import { Listing, User } from '@prisma/client'
import Container from '../shared/Container'
import Heading from '../shared/Heading'
import ListingCard from '../listings/ListingCard'

interface FavouritesClientProps {
  listings: Listing[]
  currentUser: User | null
}

const FavouritesClient: React.FC<FavouritesClientProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading
        title='Favourites'
        subtitle='List of places you have favourited'
      />
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            currentUser={currentUser}
            data={listing}
          />
        ))}
      </div>
    </Container>
  )
}

export default FavouritesClient
