# Index Page (`index.jsx` or `/`) is the jsPDF approach

- `DownloadPDF.jsx` component does the converison of the `Proposal.jsx` component into the `PDF` file: `proposal.pdf`.
- `toDataURL()` function in the `Proposal.jsx` converts Image to the `base64`.
- Only inline styles are applied to the resultant PDF file. Because of that I have used `!important` in the `.logo` class in `/styles/proposal.css` file.
- For some reason, the `Image` size is bigger when converting to the `PDF`, that's why `<img>` has inline style with `height` and `width`.

# Web API Page (`web-api.jsx` or `/web-api`)
- Implementation of the `Web API print()` method, using the component `Proposal.jsx`.

# md-to-pdf (`md-to-pdf.jsx` or `/md-to-pdf`)
- Rename `samples.env` -> `.env` and specify the name of the folder for PDF conversion.
- Make sure to run `yarn run make:pdf` first.
- Put the image to the `templates` folder as having problems with accessing `/image` directory.
- Currently only 1 pdf can be generated.
- Specify the name of the proposal folder `PROPOSAL_NAME` in the `.env` file.