function load () {
        let column_1 = [7,9,8,8,8,9,9,7,10,4,4,8,7,2,10,5,7,3,8,8,3,10,9,6,1,3,6,6,6,3];
        let column_2 = [8,4,3,7,3,8,8,4,3,10,4,9,2,2,6,10,6,2,5,5,8,2,6,5,6,4,8,3,4,6];
        let column_3 = [58, 70, 56, 94, 83, 67, 72, 83, 79, 82,85, 91, 62, 42, 95, 75, 68, 50, 81, 93, 44, 66, 57, 55, 54, 66, 55, 73, 91, 93];
        let column_4 = [96,	40,	53,	94,	78,	98,	77,	45,	51,	53,	72,	56,	50,	87,	55,81,	98,	50,	99,	41,	45,	78,	62,	55,	95,	74,	51,	41,	53,	65];
        let sum_1 = 0;
        let sum_2 = 0;
        let sum_3 = 0;
        let sum_4 = 0;
        for(i=0;i<column_1.length;i++){
            sum_1+=column_1[i];
            sum_2+=column_2[i];
            sum_3+=column_3[i];
            sum_4+=column_4[i];
        }
        let sums = [sum_1, sum_2, sum_3, sum_4];
        let total_score = 0;
        for(i=0;i<sums.length;i++){
            total_score+=sums[i];
        }
        const results = {
            col1: column_1,	
            col2: column_2,   	
            col3: column_3,	
            col4: column_4,	
            sums: sums, 	// array of sums of each column
            total_score: total_score,	// computed total score
        }
        console.log(results);


    }