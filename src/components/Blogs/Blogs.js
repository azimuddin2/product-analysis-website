import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container'>
            <div className='semantic'>
                <h2>What is semantic Tag -?</h2>
                <h4><small>The semantic elements added in HTML5 are: <br />
                </small>article, footer, header, main, aside, section , details  </h4>

                <p>To look at the benefits of semantic elements, here are two pieces of HTML code. This first block of code uses semantic elements . Overall, semantic elements also lead to more consistent code.A section is a thematic grouping of content.</p>

            </div>
            <div className='inline-container'>
                <h2>Inline vs inline-block to different-?</h2>
                <h4> Block :</h4> <p> A block element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.</p>
                <h4> inline-block :</h4> 
                <p>Here are a few elements that have a default block property: div, h1, p , li, section It’s formatted just like the inline element, where it does not start on a new line. BUT, you can set width and height values.</p>

            </div>
        </div>
    );
};

export default Blogs;