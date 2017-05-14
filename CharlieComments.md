## Runtime

This looks good.

Your CSS is nice and your code is reasonably well formated and divided into modules.

Main Issues:

- Your work is in the **CongressAddress** folder.
- Your code runs without errors and one warning.
- I can iterate through records, but only forwards.
- I can go to first and last records. +2
- You display only a few records and did not seem to get GetAddress working fully.
- I can switch between components with the menu. It is properly styled, but see the code I quote below.
- In **SmallNumbers**, you provide a view of 1 numbers. You might have added a few more.

Your Routes were trapped inside your UL. It should be like this:

```javascript
class ElfMenu extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className='App'>
                        <ul id='elfMenu'>
                            <li><Link to='/'>AddressShow</Link></li>
                            <li><Link to='/edit'>AddressEdit</Link></li>
                            <li><Link to='/small'>SmallNumbers</Link></li>
                            // NOT HERE!
                        </ul>
                        <Route exact path='/' component={Address}/>
                        <Route path='/edit' component={AddressChanger}/>
                        <Route path='/small' component={SmallNumbers}/>
                    </div>
                </div>
            </Router>
        );
    }
}
```

You have properly refactored your code into the following files or something similar:

- Address.js
- AddressShow.js
- AddressChanger
- AddressEdit
- ElfHeader
- ElfMenu
- SmallNumbers

As suggested, your React components are in files that begin with a capital letter and use Pascal casing.

The following directories exist:

- \_\_tests\_\_
- components
- css
- images

Smaller Issues

- **address-list.js** exists
- **index.js** is properly implemented
- You do a good job of formatting your code.
- You have some dead code in your files. With Git, you can always go back and find code you decided to delete. Just take the plunge and delete all that code you have commented out.

## Testing

You have 35 working tests and they are refactored into 5 **modules**, at least approximately one per component.

You might consider using and updating **ElfDebugEnzyme.js**, but you are using the Enzyme debug statements in places.

Overall, your tests are very nice. Good work.

## Get Address

Get Address is working fairly well but needs a few tweaks and is not fully integrated into **CongressAddress**.

The tab character is back slash t, not forward slash t. (\\t vs \/t).

## Commit Graded

Here is what I was looking at:


```
commit 83df640647087b1d49614248560ebfec96ee4275
Author: Daryk on laptop <daryk.kohler@gmail.com>
Date:   Fri May 12 20:19:38 2017 -0700

    Finished Midterm
```

If you feel this was the wrong commit, let me know.

## Scoring

My scoring is very subjective, but here are approximate criteria for some issues:

- No GetAddress -3
- Not enough tests -3
- Broken tests -3
- Errors or warnings at runtime -3

Extra Credit

- GetAddress works at RunTime +2
- Button goes first and last + 2

## Create Charlie Branch for Comments

Here is how I created the branch where I place your comments. First I find the commit you want me to grade. Then I:


```bash
git branch charlie-midterm
git checkout charlie-midterm
touch CharlieComments.md
```

## Push Comments

Here is how I push that branch.


```bash
git add CharlieComments.md
git commit -m "CharlieComments"
git push --set-upstream origin charlie-midterm
```

I provide a link to the comments, but if you can't find them, just go to your online repository, select the charlie-comment branch, and look for the file called **CharlieComments.md**.

============

My comments are here:

https://github.com/Ilithor/prog272-kohler-2017/blob/charlie-midterm/CharlieComments.md

And also attached, but easier to read through the above link to your repository.
