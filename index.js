const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
app.use(express.static('build'))
app.use(express.json())
app.use(morgan(':date[web] :method :url :status :response-time ms - :res[content-length] :sample'));
app.use(cors())
morgan.token('sample',function ( req) {
  //return JSON.stringify(req.body)
  return `{name:${req.body.name},number:${req.body.number}}`
})


let persons = [
  {
    id: 1,
    name: "Parani",
    number: "2020-01-10",
  },
  {
    id: 2,
    name: "Karthik",
    number: "202010",
  },
  {
    id: 3,
    name: "Kavitha",
    number: "2020-10",
  },
  {
    id: 4,
    name: "Mithunya",
    number: "20201-10",
  },
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  console.table(persons);
  res.json(persons)
})

app.get('/info', (req, res) => {
res.send(`Phonebook has info of ${persons.length} contact${persons.length !==1 ? 's':''}
  <br><br>${new Date()}`)
})

const generateId = () => {
  const maxId = Math.floor(Math.random() * 1000)
  return maxId
}

app.post('/api/persons', (request, response) => {
  const body = request.body
//  console.log(body, body.content);
  if (!body.name && !body.number) {
    return response.status(400).json({
      error: 'content missing'
    })
  }
  else if (!body.name ) {
    return response.status(400).json({
      error: 'Name missing'
    })
  }
  else if (!body.number ) {
    return response.status(400).json({
      error: 'number missing'
    })
  }
  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }
  if(!persons.find(person => person.name===body.name))
{  persons = persons.concat(person)
  response.json(person)
}
else {
  response.status(400).json({error: "Person is already in contacts"})
}

})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
})

app.put('/api/persons/:id', (request, response) => {
  console.log(JSON.stringify(request.body))
  const id = Number(request.params.id)
  const Restpersons = persons.filter(person => person.id !== id)
  persons=Restpersons.concat(request.body)
  response.json(request.body)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
