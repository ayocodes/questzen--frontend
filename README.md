# Questzen

questzen is a platform for hosting quizes, on algorands blockchain. it uses web3storage to store the quiz id and time duration of the quiz.

[link to questzen api](https://github.com/ayocodes/questzen--api)

### Use of Web3.storage

<details>
 <summary>for retrieving quiz data</summary>

```sh
  useEffect(() => {
    try {
      fetch(`https://${cid}.ipfs.w3s.link/`)
        .then((results) => results.json())
        .then((data) => {
          setQuizData(data);
        });
      setLoading(false);
    } catch (error) {
      setError(true);
      alert(error);
    }
  }, []);
```

  </details>

<details >
 <summary>for storing quiz data</summary>

```sh
  try {
    const buffer = Buffer.from(JSON.stringify(data));

    const file = [new File([buffer], "quiz.json")];

    const cid = await storage.put(file, { wrapWithDirectory: false });
    console.log("Content added with CID:", cid);

    return res.json({ status: 200, success: true, cid: cid });
  } catch (error) {
    console.log(error);
    return res.json({
      status: 400,
      success: false,
      err: error,
    });
  }
```

</details>

### Screenshots

![Alt text](screenshots/screenshot1.png?raw=true "1")
![Alt text](screenshots/screenshot2.png?raw=true "2")
![Alt text](screenshots/screenshot3.png?raw=true "3")

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
