var names = new Array();
names[0] = "abc";
names[1] = "jenny";
names[2] = "jim";
names[3] = "harry";
names[4] = "Jack";
names[5] = "ghi";
names[6] = "def";
names[7] = "Jill";
names[8] = "jkl";
names[9] = "mno";

for (var i = 0; i < names.length; i++)
{
    if(names[i].charAt(0) == 'J' || names[i].charAt(0) == 'j')
    {
        console.log("Goodbye" + names[i])
    }
    else
    {
        console.log("Hello" + names[i])
    }
}