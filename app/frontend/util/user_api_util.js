// export const fetchUser = (userId) => {
//     return $.ajax({
//         method: "GET",
//         url: `api/users/${userId}`,
//     })
// }

export const fetchAllUsers = () => {
    debugger
    return $.ajax ({
        method: "GET",
        url: "api/users/",
    })
}

export const updateUser = user => {
    debugger
    return $.ajax({
        method: "PATCH",
        url: `api/users/${user.id}`,
        data: user,
        processData: false,
        contentType: false,
    })
}