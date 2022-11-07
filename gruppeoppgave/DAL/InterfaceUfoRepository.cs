using gruppeoppgave_1.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace gruppeoppgave_1.DAL
{
    public interface InterfaceUfoRepository
    {
        Task<bool> Lagre(Ufo LagreUfo);
        Task<List<Ufo>> HentAlle();
        Task<bool> Slett(int id);
        Task<Ufo> HentEn(int id);
        Task<bool> Endre(Ufo endreRes);
    }
}
