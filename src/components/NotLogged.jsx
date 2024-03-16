import { streamers } from '../constants/streamers'
import {
  VideoCameraIcon,
  ArrowCircleLeftIcon
} from '@heroicons/react/outline'
import StreamerSideBar from './StreamerSideBar'

export default function NotLogged() {
  return (
    <>
      <div className='flex justify-between'>
        <div className='md:hidden p-3'>
          <VideoCameraIcon className='h-5 w-5 stroke-neutral-500' />
        </div>
        <div className='hidden lg:inline p-3'>RECOMENDED CHANNELS</div>
        <div className='hidden lg:inline py-3 pr-2'>
          <ArrowCircleLeftIcon className='h-5 w-5' />
        </div>
      </div>
      <div>
        {streamers.map((streamer, index) => {
          return (
            <div
              className='flex items-center justify-between'
              key={`streamer-${index}`}
            >
              <StreamerSideBar
                name={streamer.name}
                cathegory={streamer.cathegory}
                avatar={streamer.avatar}
                isLive={streamer.isLive}
                tags={streamer.tags}
                className={streamer.className}
                connected={streamer.connected}
              />
              <div className='hidden lg:flex items-center min-w-6'>
                  <div className='h-2 w-2 bg-red-500 m-1 rounded-md'></div>
                  <div>{streamer.connected} k</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
