using System.Collections.Generic;
using System.Threading.Tasks;
using gruppeoppgave_1.Models;
using Microsoft.EntityFrameworkCore;



namespace gruppeoppgave_1.DAL
{
    public class UfoRepository : InterfaceUfoRepository
    {
        private readonly UfoDB _UfoDB;

        public UfoRepository(UfoDB ufoDB)
        {
            _UfoDB = ufoDB;
        }


        public async Task<bool> Lagre(Ufo LagreUfo)
        {
            try
            {
                _UfoDB.Resultat.Add(LagreUfo);
                await _UfoDB.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<List<Ufo>> HentAlle()
        {
            try
            {
                List<Ufo> alleResultater = await _UfoDB.Resultat.ToListAsync();
                return alleResultater;
            }
            catch
            {
                return null;
            }
        }

        public async Task<bool> Slett(int id)
        {
            try
            {
                Ufo etResultat = await _UfoDB.Resultat.FindAsync(id);
                _UfoDB.Remove(etResultat);
                await _UfoDB.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<Ufo> HentEn(int id)
        {
            try
            {
                Ufo etResultat = await _UfoDB.Resultat.FindAsync(id);
                return etResultat;
            }
            catch
            {
                return null;
            }
        }

        public async Task<bool> Endre(Ufo endreRes)
        {
            try
            {
                Ufo res = await _UfoDB.Resultat.FindAsync(endreRes.id);
                res.navn = endreRes.navn;
                res.sted = endreRes.sted;
                res.dato = endreRes.dato;
                res.tid = endreRes.tid;
                res.beskrivelse = endreRes.beskrivelse;
                await _UfoDB.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}