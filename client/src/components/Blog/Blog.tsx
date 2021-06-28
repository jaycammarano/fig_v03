import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import BlogSummary from './BlogSummary';
type TBlogs = {
  data: TBlog[];
};
export type TBlog = {
  id: number;
  status: string;
  sort: null | string;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  contents: string;
  title: string;
};

const Blog = () => {
  const starterBlogs: TBlogs = {
    data: [
      {
        id: 3,
        status: 'published',
        sort: null,
        user_created: 'cbd6842f-cff3-4d93-b380-3252b0e664a0',
        date_created: '2021-06-26T22:56:12-04:00',
        user_updated: 'cbd6842f-cff3-4d93-b380-3252b0e664a0',
        date_updated: '2021-06-26T23:15:40-04:00',
        contents:
          '```\nThis is part of an ongoing series where I break down my process \nand solution to a Codewars challenge.\n```\n\n## The Problem:\n```\nGiven a list of unique words. Find all pairs of distinct indices (i, j) \nin the given list so that the concatenation of the two words, i.e. words[i] + words[j] \nis a palindrome.\n\nNon-string inputs should be converted to strings.\n\nReturn an array of arrays containing pairs of distinct indices that form palindromes. Pairs should be returned in the order they appear in the \noriginal list.\n\nExamples:\n\n["bat", "tab", "cat"] # [[0, 1], [1, 0]]\n["dog", "cow", "tap", "god", "pat"] # [[0, 3], [2, 4], [3, 0], [4, 2]]\n["abcd", "dcba", "lls", "s", "sssll"] # [[0, 1], [1, 0], [2, 4], [3, 2]]\n```\n\n## Getting Started:\n\nLet\'s break down the problem by starting with, what is a palindrome?\n\n`a word, phrase, or sequence that reads the same backward as forward`\n\nSo from the first example array, we have "battab" but we also have "tabbat". \nFrom the third example however, we have "slls" but not "llss".\n\nNow that we have a deeper understanding of the problem, let\'s \nworkout a step-by-step solution.\n\n*First thoughts:*\n1. We need to make potential palindrome pairs for each value to every other value in the array\n2. If the values make a palindrome we need to push them to an array to be returned\n\n\n*Getting more specific*\n1. Loop through each `i` in words\n\n2. Compare to each `j` in words\n\nNote: we don\'t want to compare it to itself!\n\n3. Concatenate `i` + `j` to make a potential palindrome\n\n4. Check if they are a palindrome by comparing the first and last letter, second and second to the last letter, etc.\n\n\n## The Code:\n\nFirst, declare the array you are going to push results to:\n```js\n    let results = []\n```\n\nThen, create the loops to compare the words:\n\n```js\n  for(let j = 0; j < words.length; j++){\n    for(let i = 0; i < words.length; i++){\n\n```\n\nNext, check to make sure that you aren\'t comparing the word to itself:\n\n```js\n        if(i !== j){\n```\n\nNow, concatinate the two words. Here we are checking to make sure the value is a string, and that the casing is the same. So that "bAt" and "tab" would still pass.\n```js\n    word1 = words[j]\n    word2 = words[i]\n    let potentialPal = word1.toString().toLowerCase() + word2.toString().toLowerCase()\n```\n\nThen we say, if the helper function, `checker(word)` returns true push the results array\n```js\n    if (checker(potentialPal)){\n          resultsArray.push([j, i])\n          }\n```\n\nLet\'s dive into the checker function:\n```js\nconst checker = (word) => {\n  let len = word.length;\n  for (let i=0; i<len/2; i++){\n    if(word[i]!== word[len -1 -i]){\n       return false\n       }\n    }\n    return true\n    }\n```\n1. It takes in a word, in our case `potentialPal`. \n\n2. Then, it finds the length of the word.\n\n3. Then, it compares the first and last, second and second to last numbers in a for loop.\n\n4. The for loop iterates through the word and checks each character against the character in the position of "the length of the word minus the index and minus 1". \n\n*Why remove the index and one from the position?*\nThis allows the word to iterate from the last letter to the second letter.\nFor example if `len = 10 and the index starts at 0. Say you were comparing the character at position 1(the second character), you would want to compare it to the second to last, position 9. Remember the index starts are 0, so a `len` of 10 means index of 9. So you would want to compare it to `len - i -1`. Where `i = 1`.\n\n\n## Gotchas We Ran Into:\nThe first set of test cases only shows lowercase strings. The complete test suite included characters that were not strings, but numbers. We handled this by adding `.toString()` to word1 and word2 when concatenating. \n\nThe complete suite also had characters that were not the same case. For example, ["aBBa", "AbbA"]. Initially, we were comparing word1 and word2 directly to see if they were the same. Instead of `if(i !== j){`, we used `if(word1.toString().toLowerCase() !== word2.toString().toLowerCase())`. By comparing the words themselves when they were all brought to the same case "aBBa" and "AbbA" both become "abba" and therefore don\'t get tested. So we had to change the solution to compare the indices of `i` and `j` in order to make sure we weren\'t comparing the string with itself.\n\n## Our Full Solution:\n```js\nconst concatinator = (words, resultsArray) => {\n  for(let j = 0; j < words.length; j++){\n    for(let i = 0; i < words.length; i++){\n      word1 = words[j]\n      word2 = words[i]\n        if(i !== j){\n        let potentialPal = word1.toString().toLowerCase() + word2.toString().toLowerCase()\n        if (checker(potentialPal)){\n          resultsArray.push([j, i])\n          }\n        }\n    }\n  }\n}\nconst checker = (word) => {\n  let len = word.length;\n  for (let i=0; i<len/2; i++){\n    if(word[i]!== word[len -1 -i]){\n       return false\n       }\n    }\n    return true\n  }\nconst palindromePairs = words => {\n  let result = [];\n  concatinator(words, result);\n  return result;\n}\n```\n\ntags: javascript, data structures, fundamentals, strings, code wars',
        title: 'Codewars Challenge, Day 1: Palindrome Pairs',
      },
    ],
  };
  const [blogs, setBlogs] = useState(starterBlogs);

  const fetchData = async () => {
    const response = await fetch(
      'http://localhost:8055/items/testing_collections/'
    );
    const data: TBlogs = await response.json();
    setBlogs(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayBlogs = blogs.data.map((blogPost) => {
    return <BlogSummary blog={blogPost} />;
  });
  return (
    <Layout>
      <div>
        <h1 className="m-4 my-8 mb-16 text-white text-7xl">Blog</h1>
        {displayBlogs}
      </div>
    </Layout>
  );
};

export default Blog;
