const filterByJobsType = (arr,jobType) => {
    const jobs = arr.filter(item => item.remote_or_onsite === jobType);
    return jobs
}

export {filterByJobsType}