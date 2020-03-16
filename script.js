var pdf = new PDFObject({
    url: "https://github.com/corona2019/corona2019.github.io/raw/master/Corona_comic_PGI.pdf",
    id: "pdfRendered",
    pdfOpenParams: {
      view: "FitH"
    }
  }).embed("pdfRenderer");