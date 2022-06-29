export default function Home() {
  return (
    <main>
      <h2 className='text-center text-2xl tracking-wide font-bold'>
        Welcome to the Frontend Tech Tests
      </h2>
      <p className='mx-20 mt-8 tracking-wide text-center leading-loose'>
        This is the repo where you can hone your skills and sharpen your teeth
        on some problems you might face in an interview We have given you 6
        challenges that you can try. We suggest you build a new React App to try
        building these problems. Each test demonstrates how the solution should
        function, how you build it is up to you, but it must have the core
        functionality that has been asked for!
      </p>
      <p className='mx-20 text-center mt-12'>In order, the tests are:</p>
      <ol className='text-center leading-loose tracking-wide font-semibold'>
        <li>Build a Log In Page,</li>
        <li>Build a Movie Search Bar,</li>
        <li>Create a "Name the 50 US States" Game,</li>
        <li>Create a "Find the X" Game,</li>
        <li>Build a Drop Down Menu,</li>
        <li>Build an Pseudo Instant Messaging Service</li>
      </ol>
    </main>
  );
}
