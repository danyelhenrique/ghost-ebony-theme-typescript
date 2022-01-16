const Home = () => {
  const posts = document.querySelectorAll(".post");
  const fixPostsLayout = () => {

    let cont = 0;

    /**
     * Sempre o quarto post at'e o sexto post comecando do index zero
    */

    let postsLgIndex = [4, 5, 6];

    /**
     * Array de posts para modificar
    */

    const postsToadd : Element[] = [];

    const setPost = () => {
      const pushPost = () => {
        const firstPost = posts[postsLgIndex[0]];
        const secondtPost = posts[postsLgIndex[1]];
        const thirdPost = posts[postsLgIndex[2]];

        if (firstPost) {
          postsToadd.push(firstPost);
        }
        if (secondtPost) {
          postsToadd.push(secondtPost);
        }
        if (thirdPost) {
          postsToadd.push(thirdPost);
        }
      };

      pushPost();
    };

    const fixLayout = (posts: Element[]) => {
        posts.forEach((post) => post.classList.add('col-xl-4'))
        posts.forEach((post) => post.classList.remove('col-xl-3'))
    }

    const handlePost = () => {
      if (cont >= Array.from(posts).length) {
        fixLayout(postsToadd)
        return;
      }

      setPost();
      cont += 1;
      postsLgIndex[0] = postsLgIndex[0] + 7
      postsLgIndex[1] = postsLgIndex[1] + 7
      postsLgIndex[2] = postsLgIndex[2] + 7
      handlePost();
    };

    handlePost();
  };

  const fixPostTitleAndExcerpt = (post: Element) => { 
    const postTitle = (<HTMLElement>post.querySelector('.post-title'));
    const postExcerpt = (<HTMLElement>post.querySelector('.post-excerpt'));

    if(!postExcerpt || !postTitle) return;

    const postExcerptText = postExcerpt?.innerText;
    const maxPostExcerptLetters = 260;

    const postTitleText = postTitle?.innerText;
    const maxPostTitleLetters = postTitle?.innerText.length <= 40 ? postTitle?.innerText.length : 40;

    postTitle.innerText = `${postTitleText.substring(0, maxPostTitleLetters)}${postTitle?.innerText.length <= 40 ? '' : '...'}`;
    postExcerpt.innerText = postExcerptText.substring(0, maxPostExcerptLetters) + '...';
  }

  const loopPosts = () => { 
    for(const post of posts) {
      fixPostTitleAndExcerpt(post);
    }
  }

  const init = () => {
      fixPostsLayout();
      loopPosts()
  }
  init();
};

Home();

export default {};
