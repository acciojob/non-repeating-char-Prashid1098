//your JS code here. If required.
function first_Nrc(str)
{
	let check=[];
	for(let i=0;i<str.length();i++)
		{
			check[str.charAt(i)-'a']++;
		}
	for(let i=0;i<check.length;i++)
		{
			if(check[i]==1)
			{
				return i+'a';
			}
		}
	return null;
}
let str=prompt("Enter a String");
let result=first_Nrc(str);
alert(result);
