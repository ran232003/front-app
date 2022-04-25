export const getEmployees = async()=>{
    const response = await fetch("http://localhost:5000/api/2bprecise/get-employee");
    const data = await response.json()
    return data;
}

export const assignTask = async(id,startDate,endDate,task)=>{
    const response = await fetch("http://localhost:5000/api/2bprecise/assign-task",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id:id,endDate:endDate,startDate:startDate,task:task})
    });
    const data = await response.json()
    return data;
}
    export const assignReport = async(id,startDate,report)=>{
        const response = await fetch("http://localhost:5000/api/2bprecise/assign-report",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:id,startDate:startDate,report:report})
        });
    
    const data = await response.json()
    return data;
}