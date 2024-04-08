fetch('https://jsonplaceholder.typicode.com/usersd')
      .then(response => {
        console.log("🚀 ~", response)

        if (!response.ok) throw new Error(`Error fetching: ${response.status}`)
        return response.json()
      })
      .then(response => console.log(response))
      .catch(err => console.log(err))