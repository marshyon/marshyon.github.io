---
title: "Editing files"
date: 2020-11-09T15:43:00+01:00
authors: ["Jon Brookes"]
draft: false
weight: 2
---

### General working 

If you have a user account already permitted access to push to this particular repository there is very little to do other than to check out this repo and edit and push new content. 

The process of re-rendering the site is handled in a pipeline triggered by new content being pushed.

If you do not have collaborator access and want to carry this out for yourself in your own environment, see [this article](/getting-started/cloning_this_repository_and_regenerating_the_site_locally/) for how that can be simply achieved using `hugo`

### check out repo and edit

Initially, the repo needs checked out, there after edit / add / commit / pull / push to see content pushed to the main site :

```
git clone https://github.com/marshyon/marshyon.github.io.git
cd marshyon.github.io.git/hugo/themes/hugo-theme-learn
git submodule init
git submodule update
cd ../../
code . # edit content
....
git add .
git commit -m 'some commit' .
git pull
git push
```

### Adding a new articles and editing contents

in the `hugo/content` directory, there are subdirectories that each have articles within them. 

It can be easiest to copy one of these files to a new filename of the article you want to publish.

Then simply edit the newly copied file, being careful to edit the 'metadata' at the top of the file, for example this article has metadata as follows :

```
---
title: "Editing files"
date: 2020-11-09T15:43:00+01:00
draft: false
weight: 2
---
```

After this meta data at the top of the file, just type any content as normal text and using `markdown` to highlight headings, bold, italic etc

for example

```
# heading level 1
## heading level 2
### heading level 3
```

a code block can be inserted starting with 3 back-ticks : ``` 

```
PS>$PSVersionTable

Name                           Value
----                           -----
PSVersion                      7.0.3
PSEdition                      Core
GitCommitId                    7.0.3
OS                             Microsoft Windows 10.0.19042
Platform                       Win32NT
PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0…}
PSRemotingProtocolVersion      2.3
SerializationVersion           1.1.0.1
WSManStackVersion              3.0
```
and terminated with ``` three back-ticks


see https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet for a full list of things that can be done with mark down 

### Images

Images that you want to display need to be stored as files in `hugo/static/image` or subdirectories under that directory. Then link to images in your markdown.

For example, the following markdown will display an image stored in static/images called penguins.png :

```
![penguins](/images/penguins.png)
```

![penguins](/images/penguins_scaled.png)

