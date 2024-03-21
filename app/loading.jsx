import 'bootstrap/dist/css/bootstrap.min.css';

export default function Loading() {
  return (
    <main className='container-fluid my-5'>
      <div className="loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
      <h1 className='text-center my-3'>Loading...</h1>
      <p  className='text-center'>Hopefully not for too long </p>
    </main>
  )
}
