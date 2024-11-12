import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-white py-10 w-full">
        <div className="mx-auto max-w-screen-xl px-2 sm:px-4 lg:px-6">
            <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Lorem ipsum dolor sit 
            amet consectetur adipisicing elit. Cum dolore culpa magnam ab, 
            vero voluptatem nostrum quisquam, aperiam deleniti pariatur vitae 
            perferendis laboriosam? Rerum quas repellendus sint voluptate? Quibusdam, quod.
            </p>
        </div>
    </footer>
  );
};

export default Footer;