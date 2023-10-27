import { useShallow } from 'zustand/react/shallow'
import { WhiteCard } from '../../components'
import { useBearStore } from '../../stores'

export const BearPage = () => {
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
        <BlackBears />
        <PolarBears />
        <PandaBears />
        <BearDispaly />
      </div>
    </>
  )
}

const BlackBears = () => {
  const blackBears = useBearStore((state) => state.blackBears)
  const increaseBlackBears = useBearStore((state) => state.increasePolarBears)
  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className='flex flex-col md:flex-row'>
        <button onClick={() => increaseBlackBears(1)}> +1</button>
        <span className='mx-2 text-3xl lg:mx-10'> {blackBears} </span>
        <button onClick={() => increaseBlackBears(-1)}>-1</button>
      </div>
    </WhiteCard>
  )
}

const PolarBears = () => {
  const polarBears = useBearStore((state) => state.polarBears)
  const increasePolarBears = useBearStore((state) => state.increasePolarBears)
  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>
      <div className='flex flex-col md:flex-row'>
        <button onClick={() => increasePolarBears(1)}> +1</button>
        <span className='mx-2 text-3xl lg:mx-10'> {polarBears} </span>
        <button onClick={() => increasePolarBears(-1)}>-1</button>
      </div>
    </WhiteCard>
  )
}
const PandaBears = () => {
  const pandaBears = useBearStore((state) => state.pandaBears)
  const increasePandaBears = useBearStore((state) => state.increasePandaBears)
  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className='flex flex-col md:flex-row'>
        <button onClick={() => increasePandaBears(1)}> +1</button>
        <span className='mx-2 text-3xl lg:mx-10'> {pandaBears} </span>
        <button onClick={() => increasePandaBears(-1)}>-1</button>
      </div>
    </WhiteCard>
  )
}

const BearDispaly = () => {
  const bear = useBearStore(useShallow((state) => state.bears))
  const doNothing = useBearStore((state) => state.doNothing)
  const addBear = useBearStore((state) => state.addBear)
  const clearBEar = useBearStore((state) => state.clearBear)

  return (
    <WhiteCard>
      <h1>Osos</h1>
      <button onClick={doNothing}>Do Nothing</button>
      <button className='ml-2 ' onClick={addBear}>
        Add Bear
      </button>
      <button className='mt-2 ' onClick={clearBEar}>
        Clear Bear
      </button>

      {<pre>{JSON.stringify(bear, null, 2)}</pre>}
    </WhiteCard>
  )
}
