function MyHeader() {
    return (
      <header>
        <div>
          <img
            class="logo"
            src="https://4.bp.blogspot.com/-8ZUuncM3-qE/U8p1s-hn2FI/AAAAAAAALis/gQ5Ho5nTDpA/s1600/Elder+Sign.png"
          ></img>
        </div>
        <div class="sections">
          <ol>
            <li>
              <a href=" ">Great Ones</a>
            </li>
            <li>
              <a href=" ">Outer Gods</a>
            </li>
            <li>
              <a href=" ">Elder Gods</a>
            </li>
          </ol>
        </div>
  
        <div class="enroll">
          Become a <span>cultist</span>!
        </div>
      </header>
    );
  }
  
  function Text() {
    return (
      <div>
        <span class="sentence-1">
          "The Cats of Ulthar" is a short story written by American fantasy author
          H. P. Lovecraft in June 1920. In the tale, an unnamed narrator relates
          the story of how a law forbidding the killing of cats came to be in a
          town called Ulthar. As the narrative goes, the city is home to an old
          couple who enjoy capturing and killing the townspeople's cats. When a
          caravan of wanderers passes through the city, the kitten of an orphan
          (Menes) traveling with the band disappears. Upon hearing of the couple's
          violent acts towards cats, Menes invokes a prayer before leaving town
          that causes the local felines to swarm the cat-killers' house and devour
          them. Upon witnessing the result, the local politicians pass a law
          forbidding the killing of cats.
        </span>
        <span class="sentence-2">
          Azathoth is a deity in the Cthulhu Mythos and Dream Cycle stories of
          writer H. P. Lovecraft and other authors. He is the ruler of the Outer
          Gods, and may be seen as a symbol for primordial chaos.
        </span>
        <span class="sentence-3">
          Shub-Niggurath is a fictional deity created by writer H. P. Lovecraft.
          She is often associated with the phrase "The Black Goat of the Woods
          with a Thousand Young". The only other name by which Lovecraft referred
          to her was "Lord of the Wood" in his story The Whisperer in Darkness.
        </span>
        <span class="sentence-4">
          Nyarlathotep is a fictional character created by H. P. Lovecraft. The
          character is a malign deity in the Cthulhu Mythos, a shared universe.
          First appearing in Lovecraft's 1920 prose poem "Nyarlathotep", he was
          later mentioned in other works by Lovecraft and by other writers. Later
          writers describe him as one of the Outer Gods, an alien pantheon.
        </span>
        <span class="sentence-5">
          Howard Phillips Lovecraft (US: /ˈlʌvkræft/; August 20, 1890 – March 15,
          1937) was an American writer of weird, science, fantasy, and horror
          fiction. He is best known for his creation of the Cthulhu Mythos.
        </span>
        <span class="sentence-6">
          "The Colour Out of Space" is a science fiction/horror short story by
          American author H. P. Lovecraft, written in March 1927. In the tale, an
          unnamed narrator pieces together the story of an area known by the
          locals as the "blasted heath" in the hills west of the fictional town of
          Arkham, Massachusetts. The narrator discovers that many years ago a
          meteorite crashed there, poisoning every living being nearby; vegetation
          grows large but foul-tasting, animals are driven mad and deformed into
          grotesque shapes, and the people go insane or die one by one.
        </span>
        <span class="sentence-7">
          The Case of Charles Dexter Ward is a short horror novel (51,500 words)
          by American writer H. P. Lovecraft, written in early 1927, but not
          published during the author's lifetime. Set in Lovecraft's hometown of
          Providence, Rhode Island, it was first published (in abridged form) in
          the May and July issues of Weird Tales in 1941; the first complete
          publication was in Arkham House's Beyond the Wall of Sleep collection
          (1943). It is included in the Library of America volume of Lovecraft's
          work.
        </span>
      </div>
    );
  }
  
  function Cat({ src, className }) {
    if (!className) {
      className = "cats";
    }
    return <img className={className} src={src} alt=" "></img>;
  }
  
  function MyButton() {
    function handleClick() {
      alert("You clicked me!");
    }
  
    return <button onClick={handleClick()}>Click me</button>;
  }
  
  function MyBody() {
    let urls = [
      "https://i.pinimg.com/originals/d7/70/d9/d770d9d10878c4bcfcfb046ed6506fab.jpg",
      "https://ih0.redbubble.net/image.346546992.9119/flat,550x550,075,f.jpg",
      "https://i.pinimg.com/originals/c7/be/72/c7be7267aecd054d7cc61049060d53a5.jpg",
      "https://i.pinimg.com/originals/39/4f/86/394f86053a7681d14b5ace9617d26e28.jpg",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.h7X2HFE_Gx6SYlOeNOBx-gHaGa%26pid%3DApi&f=1&ipt=4dea072e29048dc6dc4b05417e2f25088ebdc1ec8426a056326b4504bd0596e1&ipo=images",
      "https://www.sortra.com/wp-content/uploads/2016/02/coby-the-cat41.jpg"
    ];
    let components = urls.map((url) => <Cat src={url} />);
    return (
      <div class="center">
        {components}
        <Text />
      </div>
    );
  }
  
  export default function MyApp2() {
    return (
      <main>
        <MyButton />
        <MyHeader />
        <MyBody />
      </main>
    );
  }
  