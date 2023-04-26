from setuptools import setup

setup(
    name='widd',
    version='0.1',
    author='Fröhling, Leon, Bleier, Arnim, Hienstorfer-Heitmann, Mio',
    description='A Jupyter Notebook extension that adds a button to the toolbar.',
    packages=['widd'],
    include_package_data=True,
    install_requires=[
        'notebook>=6.0'
    ],
    classifiers=[
        'Framework :: Jupyter',
        'Programming Language :: Python :: 3',
        'Programming Language :: JavaScript',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
    ],
)
