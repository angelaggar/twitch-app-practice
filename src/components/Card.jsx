export default function Card(props) {
  const tags = props.tags
  return (
    <div className='transition w-auto min-w-44 my-[2px] mx-auto sm:mr-2 sm:pr-2 text-neutral-400 font-normal text-xs flex-col leading-5'>
      <div className='bg-purple-600 transition h-auto min-h-64 max-w-80 sm:max-w-64'>
        <img
          className='resize min-h-64 hover:translate-x-[6px] hover:-translate-y-[6px] duration-300'
          src={props.cover}
          alt='Imagen'
        />
      </div>
      <div className='pt-2'>
        <p className=' text-neutral-300 hover:text-purple-500 font-bold text-sm'>{props.cathegory}</p>
        <p >{props.connected}k espectadores</p>
        <div className="flex">
          {tags.map((tag, index) => {
            return (
              <div key={index}>
                <p className='mr-1 px-2 inline font-bold bg-zinc-800 rounded-xl justify-center'>
                  {tag}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
