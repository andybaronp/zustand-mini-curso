import { WhiteCard } from '../../components'
import { useWeddingBoundStore } from '../../stores/wedding'

export const WeddingInvitationPage = () => {
  const firstName = useWeddingBoundStore((state) => state.firstName)
  const lastName = useWeddingBoundStore((state) => state.lastName)
  const setFirstName = useWeddingBoundStore((state) => state.setFirstName)
  const setLastName = useWeddingBoundStore((state) => state.setLastName)

  const guestCount = useWeddingBoundStore((state) => state.guestCount)
  const setGuestCount = useWeddingBoundStore((state) => state.setGuestCount)

  // const eventDate = useWeddingBoundStore((state) => state.eventDate)
  const eventYYYYMMDD = useWeddingBoundStore((state) => state.eventYYYYMMDD())
  const eventHHMM = useWeddingBoundStore((state) => state.eventHHMM())
  const setEventDate = useWeddingBoundStore((state) => state.setEventDate)
  const setEvenTime = useWeddingBoundStore((state) => state.setEvenTime)

  const isConfirmed = useWeddingBoundStore((state) => state.isConfirmed)
  const setIsConfirmed = useWeddingBoundStore((state) => state.setIsConfirmed)

  return (
    <>
      <h1>Invitación de Boda</h1>
      <p>Zustand segmentado en slices</p>
      <hr />

      <WhiteCard className='flex items-center justify-center p-12'>
        <div className='mx-auto w-full max-w-[550px]'>
          <form>
            <div className='flex flex-wrap -mx-3'>
              <div className='w-full px-3 sm:w-1/2'>
                <div className='mb-5'>
                  <label className='mb-3 block text-base font-medium text-[#07074D]'>
                    Primer Nombre
                  </label>
                  <input
                    onChange={(e) => setFirstName(e.target.value)}
                    type='text'
                    name='firstName'
                    id='firstName'
                    placeholder='Primer Nombre'
                    value={firstName}
                  />
                </div>
              </div>
              <div className='w-full px-3 sm:w-1/2'>
                <div className='mb-5'>
                  <label className='mb-3 block text-base font-medium text-[#07074D]'>
                    Apellido
                  </label>
                  <input
                    onChange={(e) => setLastName(e.target.value)}
                    type='text'
                    name='lastName'
                    id='lastName'
                    placeholder='Apellido'
                    value={lastName}
                  />
                </div>
              </div>
            </div>
            <div className='mb-5'>
              <label className='mb-3 block text-base font-medium text-[#07074D]'>
                ¿Cuántos invitados traerá?
              </label>
              <input
                onChange={(e) => setGuestCount(+e.target.value)}
                value={guestCount}
                type='number'
                name='guestNumber'
                id='guestNumber'
                placeholder='5'
                min='0'
                className='w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>

            <div className='flex flex-wrap -mx-3'>
              <div className='w-full px-3 sm:w-1/2'>
                <div className='mb-5'>
                  <label className='mb-3 block text-base font-medium text-[#07074D]'>
                    Fecha de evento
                  </label>
                  <input
                    type='date'
                    name='eventDate'
                    id='eventDate'
                    value={eventYYYYMMDD}
                    onChange={(e) => setEventDate(e.target.value)}
                  />
                </div>
              </div>
              <div className='w-full px-3 sm:w-1/2'>
                <div className='mb-5'>
                  <label className='mb-3 block text-base font-medium text-[#07074D]'>
                    Hora del evento
                  </label>
                  <input
                    type='time'
                    name='eventTime'
                    id='eventTime'
                    value={eventHHMM}
                    onChange={(e) => setEvenTime(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className='mb-5'>
              <label className='mb-3 block text-base font-medium text-[#07074D]'>
                ¿Tu también vendrás?
              </label>
              <div className='flex items-center space-x-6'>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    name='isComing'
                    id='radioButton1'
                    className='w-5 h-5'
                    checked={isConfirmed}
                    onChange={(e) => setIsConfirmed(e.target.checked)}
                  />
                  <label className='pl-3 text-base font-medium text-[#07074D]'>
                    Si
                  </label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    name='isComing'
                    id='radioButton2'
                    className='w-5 h-5'
                    checked={!isConfirmed}
                    onChange={(e) => setIsConfirmed(e.target.checked)}
                  />
                  <label className='pl-3 text-base font-medium text-[#07074D]'>
                    No
                  </label>
                </div>
              </div>
            </div>

            <div>
              <button>Enviar</button>
            </div>
          </form>
        </div>
      </WhiteCard>
    </>
  )
}
