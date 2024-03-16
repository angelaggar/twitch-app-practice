import Sidebar from './components/Sidebar'
import ContentCards from './components/ContentCards'

export default function App() {
  return (
    <main className='block w-svw h-auto'>
      <nav className='h-12 p-1 block bg-neutral-800 border-black border-b-2'></nav>
      <div className='flex flex-row sm:pr-7'>
        <Sidebar />
        <div className='grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 w-full'>
            <ContentCards />
        </div>
      </div>
    </main>
  )
}

// export function App2() {
//   return (
//     <main className='block w-svw h-auto'>
//       <nav className='h-12 p-1 block bg-neutral-800 border-black border-b-2'>
//         {/* Contenido del nav */}
//       </nav>
//       <div className='flex flex-row pr-7'>
//         <Sidebar />
//         <div className='grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 w-full'>
//           <div className='mx-auto'>
//             <ContentCards />
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }
