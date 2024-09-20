//1st method to use it(by using promise)
const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
  }
}

export{asyncHandler}



/* 2nd method to use it -> asyncHandler is a higher order function we can use or understand as it follows->
const asyncHandler=()=>{}
const asyncHandler= () => (func) => () => {}
const asyncHandler= (func) => async () => {}
  */

/*
const asyncHandler=(fn)=>async(req,res,next)=> {
  try{
     await fn(req, res, next)
  }catch (error){
    res.status(err.code || 500).json({
      sucess:false,
      message: err.message
    })
  }
}
  */