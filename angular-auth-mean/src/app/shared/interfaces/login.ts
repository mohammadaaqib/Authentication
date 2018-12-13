interface Iuser{
        id:string,
        name :string,
        username:string,
        email:string
     }




export interface Ilogin{
success:boolean,
token:string,
 user:Iuser
}