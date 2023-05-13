define({

        'name' : 'SAGE WIDD',
        'sub-menu' : [ 


                {
            'name' : 'General Characteristics',
            'sub-menu' : [

        
        {
        'name' : 'Who collected the dataset?',
        'snippet' : [
        '#### Who collected the dataset and who funded the process?',
    ],
        
        },
        
        {
        'name' : 'Where is the dataset hosted?',
     	'snippet' : ['#### Where is the dataset hosted? Is the dataset distributed under a copyright or license? ',]
        },
        
        {
        'name' : 'What do the instances that comprise the dataset represent?',
        'snippet' : ['#### What do the instances that comprise the dataset represent? What data does each instance consist of? ',]
        },
        
        {
        'name' : 'How many instances are there in total in each category?',
        'snippet' : ['#### How many instances are there in total in each category (as defined by the instances’ label), and - if applicable - in each recommended data split? ',]        
        

        },
        {
        'name' : 'In which contexts and publications has the dataset been used already?',
        'snippet' : ['#### In which contexts and publications has the dataset been used already?  ',]        
        

        },        

        {
        'name' : 'Are there alternative datasets that could be used? ',
        'snippet' : ['#### Are there alternative datasets that could be used for the measurement of the same or similar constructs? Could they be a better fit? How do they differ?  ',]        
       
        },
        {
        'name' : 'Can the dataset collection be readily reproduced? ',
        'snippet' : ['#### Can the dataset collection be readily reproduced given the current data access, the general context and other potentially interfering developments?  ',]        
       
        },
        
        
                ]},
                
                                {
            'name' : 'Construct Definition',
            'sub-menu' : [

        
        {
        'name' : 'For the measurement of what construct was the dataset created? ',
        'snippet' : ['#### For the measurement of what construct was the dataset created? ',],
        
        },
        
        {
        'name' : 'How is the construct operationalized?',
     	'snippet' : ['#### How is the construct operationalized? Can the dataset fully grasp the construct? If not, what dimensions are left out? Have there been any attempts to evaluate the validity of the construct\'s operationalization?  ',]
        },
        
        {
        'name' : 'What related constructs could (not) be measured through the dataset?',
        'snippet' : ['#### What related constructs could (not) be measured through the dataset? What should be considered when measuring other constructs with the dataset? ',]
        },
        
        {
        'name' : 'What is the target population? ',
        'snippet' : ['#### What is the target population?  ',]        
        

        },
               
                ]},

                {'name' : 'Platform Selection',
                'sub-menu' : [
                    {'name' : 'What are the key characteristics of the platform?',
                    'snippet' : ['#### What are the key characteristics of the platform at the time of data collection? ',],
                },
                {
                    'name' : 'What are the effects of the platform\'s ToS?',
                    'snippet' : ['#### What are the effects of the platform\'s ToS on the collected data? ',],
            },
            {'name' : 'What are the effects of the platform\'s norms?',
            'snippet' : ['#### What are the effects of the platform\'s sociocultural norms on the collected data? ',],
        },
        {'name' : 'How were the relevant traces collected from the platform?',
            'snippet' : ['#### How were the relevant traces collected from the platform? Are there any technical constraints of the data collection method? If yes, how did those limit the dataset design?  ',],
        },
        {'name' : 'What errors might occur when merging multiple datasets?',
        'snippet' : ['#### In case multiple data sources were used, what errors might occur through their merger or combination?  ',],
    },  
    {'name' : 'What is known about the platform\'s population? ',
    'snippet': ['#### What is known about the platform\'s population? ',],
},
                ]},

                {'name' : 'Data Collection ',
                'sub-menu' : [
                    {'name' : 'Trace Selection Error ',
                'sub-menu' : [
                    {'name' : 'How was the data associated with each instance acquired? ',
                'snippet' : ['#### How was the data associated with each instance acquired? On what basis were the trace selection criteria chosen? ',],
            },
            {'name' : 'Over what timeframe was the data collected?',
            'snippet' : ['#### Over what timeframe was the data collected, and how might that timeframe have affected the collected data? ',],
            },
            {'name' : 'Was there any data that could not be adequately collected?' ,
            'snippet' : ['#### Was there any data that could not be adequately collected? ',],
            },
            {'name' : 'Is any information missing from individual instances? ' ,
            'snippet' : ['#### Is any information missing from individual instances? Could there be a systematic bias?  ',],
            },
    ]},
        {'name' : 'User Selection Error',
        'sub-menu' : [
            {'name' : 'Does the dataset contain all possible instances?',
            'snippet' : ['#### Does the dataset contain all possible instances or is it a sample (not necessarily random) of instances from a larger set? If the dataset is a sample from a larger set, what was the sampling strategy? ',],
        },
        {'name' : 'What is known about the dataset population? ',
        'snippet' : ['#### What is known about the dataset population? Are there user groups systematically in- or excluded in/from the dataset in direct consequence of the trace selection criteria? ',],
    },
        {'name' : 'If the dataset relates to people, how did they consent to collecting and using their data? ',
        'snippet' : ['####  If the dataset relates to people, how did they consent to collecting and using their data?  ',],
    },
    {'name' : 'Does the data include information on minors? ',
    'snippet' : ['####  Does the data include information on minors?',],
},    
        ]}
                ]},

                {'name' : 'Data Preprocessing and Data Augmentation ',
            'sub-menu' : [
                {'name' : 'Is there a label or target associated with each instance?',
            'snippet' : ['#### Is there a label or target associated with each instance? If so, how were the labels or targets generated? ',],
                },
                {'name' : 'How do automated method\'s performance impact argumentations?',
                'snippet' : ['#### If automated methods were used, how does the methods\* performance impact the correctness of the augmentations? ',],
                },
                {'name' : 'Who were human annotators to create labels?',
                'snippet' : ['#### If human annotations were used, who were the annotators that created the labels? How were they recruited or chosen? How were they instructed? ',],
                },
                {'name' : 'How was the final gold label derived from different annotations?',
                'snippet' : ['#### If the final gold label was derived from different annotations, how was this done? ',],
                },
                {'name' : 'Have there been any attempts to validate the labels? ',
                'snippet' : ['#### Have there been any attempts to validate the labels? ',],
                },
                {'name' : 'How could the data be misused? ',
                'snippet' : ['#### How could the data be misused? ',],
                },
                {'name' : 'Can the dataset contribute to the reinforcement of social inequality? ',
                'snippet' : ['#### Can the dataset in any way unintendedly contribute to the reinforcement of social inequality? ',],
                },
                {'name' : 'Have attributes and characteristics of individuals been inferred? ',
                'snippet' : ['#### Have attributes and characteristics of individuals been inferred? ',],
                },
                {'name' : 'Is it possible to identify individuals either directly or indirectly from the data? ',
                'snippet' : ['#### Is it possible to identify individuals either directly or indirectly from the data? ',],
                },
                {'name' : 'Have traces been excluded? Why and by what criteria? ',
                'snippet' : ['#### Have traces been excluded? Why and by what criteria? ',],
                },
                {'name' : 'Have users been excluded? Why and by what criteria? ',
                'snippet' : ['#### Have users been excluded? Why and by what criteria? ',],
                },
                {'name' : 'Does the dataset provide information to adjust the results to a target population? ',
                'snippet' : ['#### Does the dataset provide information to adjust the results to a target population? If so, is this information inferred or self-reported? ',],
                },

            ]},

        ],

    });
