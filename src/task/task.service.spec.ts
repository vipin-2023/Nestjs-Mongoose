// import { Test, TestingModule } from "@nestjs/testing";
// import { TaskService } from "./task.service"


// describe('TaskService',()=>{
//   let service:TaskService;
//   beforeEach(async () => {
//     const module:TestingModule = await Test.createTestingModule({
//       providers:[TaskService],
//     }).compile();
//     service = module.get<TaskService>(TaskService);
        
//   });

//   it('should be defined',()=>{
//     expect(service).toBeDefined();
//   });

//   it("should return an empty array of tasks",()=>{
//     const tasks = service.getAllTasks();
//     expect(tasks).toEqual([])
//   });

//   it("should return an array of tasks",async ()=>{
//     const mockTasks = [
//       { id: "1", title: 'Task 1', description: 'Description 1', done: false },
//       { id: "2", title: 'Task 2', description: 'Description 2', done: true },
//     ];
//     jest.spyOn(service,'getAllTasks').mockResolvedValue(mockTasks);
//     const tasks = await service.getAllTasks();
//     expect(tasks).toEqual(mockTasks);

//   });

//   it('should create a new task',()=>{
//     const newTask = { id:"3", title: 'New Task', description: 'New Description', done: false };
//     jest.spyOn(service,'createTask').mockReturnValue(newTask)

//     const createTask = service.createTask(newTask);
//     expect(createTask).toEqual(newTask);

//   });

//   it('should update an existing task',()=>{
//     const existingTask = { id: 1, title: 'Task 1', description: 'Description 1', done: false };
//     const updatedTaskData = {title:'updated Task',done:true}
//     const updatedTask={...existingTask,...updatedTaskData}
    
//     jest.spyOn(service,"updateTask").mockReturnValue(updatedTask);

//     const result = service.updateTask(existingTask.id,updatedTaskData)
//     expect(result).toEqual(updatedTask);
//   });

//   it('should return null when updating a non-existing task',()=>{
//     const nonExistingTaskId = 999;
//     const updatedTaskData = {title:'updated Task',done:true}

//     jest.spyOn(service,'updateTask').mockReturnValue(null);

//     const result = service.updateTask(nonExistingTaskId,updatedTaskData);
//     expect(result).toBeNull();
//   });
  
//   it("should not throw an error when deleting a non-existing task",()=>{
//     const nonExistingTaskId = 999;
//     jest.spyOn(service,'deleteTask').mockImplementation();
//     expect(()=> service.deleteTask(nonExistingTaskId)).not.toThrow();

//   });

// })