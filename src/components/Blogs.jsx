import React from "react";

const Blogs = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-2xl font-semibold'>
        {" "}
        a. When should you use context API?
      </h1>
      <p>
        Ans: when some data need to passing props like props drilling and
        accessible by many component then we should use context API.
      </p>
      <h1 className='text-2xl font-semibold'>
        b. When should you use context API?
      </h1>
      <p>
        Ans: All react hook in like e function. custom hook is a reusable
        function. custom hook is a JavaScript function whose name starts with
        "use" and that may call other Hooks.
      </p>
      <h1 className='text-2xl font-semibold'>c. What is useMemo?</h1>
      <p>
        Ans: useMemo hook is stored return value. Think of memoization as
        caching a value so that it does not need to be recalculated. useMomo
        hook only runs when one of its dependencies update.
      </p>
      <h1 className='text-2xl font-semibold'>d. What is useRef?</h1>
      <p>
        Ans: useRef react hook use to access dom element. It can be used to
        store a mutable value that does not cause a re-render when updated.
      </p>
    </div>
  );
};

export default Blogs;
