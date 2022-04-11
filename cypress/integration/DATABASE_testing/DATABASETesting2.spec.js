import {connection} from '../../plugins/index'

describe('I execute select all query on DB',() => {
    
    it('Read from DB',()=>{

        connection.query('SELECT * FROM Persons', function (error, results, fields) {
            // error will be an Error if one occurred during the query
            // results will contain the results of the query
            // fields will contain information about the returned results fields (if any)
          })     
        
        
        
        
        
        


    })
        
    
    
    
    
    
  });






