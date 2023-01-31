import worker from '../Assets/worker.jpg';

function Careers () {
  return (
    <section>
      <div className="container flex flex-col md:flex-row items-center p-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <div className="flex flex-col mb-32 space-y-12 md: w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            {' '}Want to be a part of our team?
          </h1>
          <p className="max-w-sm text-center text-gray-500 md:text-left">
            {' '}
            We've got vacancies in both our warehouses and sales department, get in touch with Andy via email for more details.
          </p>
          <div className="flex md:justify-start">
            <a
              href="/"
              className=" justify-self-start p-3 px-6  max-h-24 text-white bg-red-600 rounded-full baseline hover:bg-red-300 mx-auto text-center shrink-2 grow-0"
            >
              {' '}andy.j@fakeEmail.com
            </a>

          </div>
        </div>

        <div className="min-h-10 shrink-1 mx-3">
          <img src={worker} alt="A warehouse worker" />
        </div>

      </div>
      <p className="text-gray-400 text-center">
        _____________________________________
      </p>
    </section>
  );
}
export default Careers;
