@route("/profile")
@auth({
    requiredPermissions:[],
    userPermissions:[]
})
function Profile(){
    return <div>my profile</div>
}