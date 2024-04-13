const baseUrl = 'https://api.telegram.org/bot7154271309:AAGvBGbx03yGTVr1aRRH2MAn5sZ4f5GUnU4/'

export const sendMessage = async (messsage) =>{
const url = `${baseUrl}sendMessage?chat_id=-4199706288text=${messsage}`
}

const response = await fetch(url)