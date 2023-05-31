# Workflow-integrated data documentation aka widd

## What is WIDD?

You are a diligent social scientist, keen to execute a rigorous quantitative analysis and always on the go to enhance the quality of your data and the validity of your results.

Sadly, in your priority data documentation usually comes last in the form of a careless appendix, the creation-process of which is driven by haste and a lot of backwards-researching on the decisions you and your team made five months ago. No wonder, even though you are pro-data quality, documentation of your research decision is a thing that you secretly and openly disgusts you.

Luckily, there is WIDD, your **workflow-integrated data documentation**.

WIDD enables you to 

## Installation

- Before you start: make sure you have jupyter extensions installed for you jupyter notebook:
  + `pip install jupyter_contrib_nbextensions`
  + `jupyter contrib nbextension install --user`

- Now you may proceed with the installation of WIDD.

1. `git clone https://github.com/gesiscss/widd $(jupyter --data-dir)/nbextensions/widd` Download the content of this repository to where you store your nbextensions.
2. `jupyter nbextension install $(jupyter --data-dir)/nbextensions/widd` Install the widd extension in that directory.
3. `jupyter nbextension enable widd/main` Enable widd and you may go.

## Working with WIDD


Materials are licensed under [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/).


[![Creative Commons Lizenzvertrag](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)

