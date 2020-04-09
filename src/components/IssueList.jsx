import React, { Component } from 'react';
import Issue from './IssueDetail'
import { Row,  Card } from 'react-materialize';

class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [],
        };
    }

    componentDidMount() {
        fetch("https://api.github.com/repos/facebook/create-react-app/issues")
            .then(res => res.json())
            .then((result) => {

                this.setState({
                    issues: result
                });
               

            });

    }
    render() {
        const { issues } = this.state;
        const link = "/issue/" 
        console.log('issue number', issues.number)
        return (
            <div>
               
  

                    {issues.length > 0 ? (
                        issues.map(issue => (
                            
                            <Row key={issue.id}>
                                  <Card key={issue.id}
                                    actions={[
                                        <a  href={link + issue.number} > test</a>,
                                        
                                    ]}
                                    className="blue-grey darken-1"
                                    
                                    textClassName="white-text"
                                    title={issue.title}
                                    >
                                   
                                  </Card>
                            </Row>
                        ))
                    ) : (
                            <li>No Data</li>
                        )
                    }
                

            </div>
        )
    }
}



export default IssueList;