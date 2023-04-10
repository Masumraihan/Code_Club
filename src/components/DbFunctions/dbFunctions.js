
const addToLocal = (id) => {
    const previousId = JSON.parse(localStorage.getItem("job-id"));
    let newId = []
    if (previousId) {
        const isExist = previousId.find(pId => pId === id);
        if (!isExist) {
            newId = [...previousId,id]
        } else{
            alert("already added");
            return;
        }
    }
    else{
        newId.push = id
    }
    localStorage.setItem("job-id", JSON.stringify(newId));
}

export {addToLocal}