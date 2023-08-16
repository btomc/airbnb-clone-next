import getListings from '@/actions/getListings'

import Container from '@/components/shared/Container'
import EmptyState from '@/components/shared/EmptyState'

export default async function Home() {
  const listings = await getListings()

  if (listings.length === 0) {
    return <EmptyState showReset />
  }

  return (
    <Container>
      <div className='pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        {listings.map((listing: any) => {
          return <div>{listing.title}</div>
        })}
      </div>
    </Container>
  )
}
