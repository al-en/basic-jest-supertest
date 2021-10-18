import app from '../src/app'
import request from 'supertest'

describe('GET /tasks', ()=>{
    test('should respond with status 200',async ()=>{
        // Se hace una petición GET a nuestro servidor app
        const response = await request(app).get('/tasks').send()
        expect(response.statusCode).toBe(200)
    })

    test('should respond with an array', async ()=>{
        const response = await request(app).get('/tasks').send()
        expect(response.body).toBeInstanceOf(Array)
    })
});

describe('POST /tasks', () =>{
    describe('given title and description',()=>{
        const newTask = {
            title:"First task",
            description:"Description for testing"
        };
        
        //should respond with a 200 status code
        test('should respond with a 200 status code', async()=>{
            const response = await request(app).post('/tasks').send(newTask)
            expect(response.statusCode).toBe(200)
        })
    
        //should respond with a JSON object (content-type of application/json)
        test('should have a content-type: application/json in header',async()=>{
            const response = await request(app).post('/tasks').send(newTask);
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
        })
        //should respond with a json object containing the new taskwith an id
        test('should respond with an task ID', async()=>{
            const response = await request(app).post('/tasks').send(newTask);
            expect(response.body.id).toBeDefined();
        })

    })

    describe('when title and description is missing', ()=>{
        test('should respond with a 400 status code', async ()=>{
            const fields = [
                {},
                {title:'Test Task'},
                {description:'Test description'}
            ]

            for(const field of fields){
                const response = await request(app).post('/tasks').send(field);
                expect(response.statusCode).toBe(400)

            }
        })
    })

});