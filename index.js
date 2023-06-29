
const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6275d0b2d5msh980a6cf2a2ab283p1fb68fjsn4e10ec9d9987',
		'X-RapidAPI-Host': 'ip-to-location3.p.rapidapi.com'
	}
}


  const fetchIpInfo = ip => {
    return fetch(`https://ip-to-location3.p.rapidapi.com/?ip=${ip}`, OPTIONS)
        .then(res => res.json())
        .catch(err => console.error(err))
  }



  const $ = selector => document.querySelector(selector) 

  const $form = $('#form')
  const $input = $('#input')
  const $submit =  $('#submit')
  const $results = $('#results')
  console.log($results);

  $form.addEventListener('submit', async(event) =>{
    event.preventDefault()//Para evitar que por defecto envie un post y se refresque la página
    const {value} = $input
    console.log(value)
    if(!value) return
    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)
    console.log(ipInfo)
    console.log(JSON.stringify(ipInfo, null, 2))
    if(ipInfo){
      console.log('success')
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')
  })