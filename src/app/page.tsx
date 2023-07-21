import { About } from '../components/about/About'
import { Presentation } from '../components/presentation/Presentation'
import { portfolioData } from '../../utils/constant'
import { Project } from '@/components/project/Project'


export default function Home() {
  // const myWixClient= createClient({
  //   auth:OAuthStrategy({
  //     clientId:process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
  //     tokens:JSON.parse(Cookies.get('session') || '')
  //   }),
  // })

  return (
    <div className='flex flex-col min-w-full min-h-screen gap-y-6'>
      <Presentation name={portfolioData.header.name} title={portfolioData.header.title} description={portfolioData.header.description} />
      <About title={portfolioData.about.title} description={portfolioData.about.description} />
      <Project />

    </div>
  )
}
