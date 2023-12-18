import { StateStorage, createJSONStorage } from 'zustand/middleware'

const fireBaseURL =
  'https://zustang-storage-curso-default-rtdb.firebaseio.com/zustand'

const fireBaseAPi: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    // eslint-disable-next-line no-useless-catch
    try {
      const data = await fetch(`${fireBaseURL}/${name}.json`).then((res) =>
        res.json(),
      )
      return JSON.stringify(data)
    } catch (error) {
      throw error
    }
  },
  setItem: async function (name: string, value: string): Promise<void> {
    await fetch(`${fireBaseURL}/${name}.json`, {
      method: 'PUT',
      body: value,
    }).then((res) => res.json())
  },
  removeItem: function (name: string): void {
    // sessionStorage.removeItem(name)
    console.log(name)
  },
}

export const fireBaseStorage = createJSONStorage(() => fireBaseAPi)
