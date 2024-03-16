export default function StreamerSideBar(props) {
  return (
    <div className='grid grid-flow-col justify-center items-center p-2 lg:justify-between'>
      <div className='flex items-center'>
        <img src={props.avatar || '🤔'} className='h-7 w-7 rounded-2xl' />
        <div className=' hidden lg:inline px-3'>
          <div className='text-sm'>{props.name}</div>
          <div>{props.cathegory}</div>
        </div>
      </div>
    </div>
  )
}
